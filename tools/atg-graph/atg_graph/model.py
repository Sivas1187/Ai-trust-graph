# SPDX-License-Identifier: Apache-2.0
"""A small in-memory directed, labelled multigraph with provenance."""

from __future__ import annotations

from dataclasses import dataclass, field

from .schema import ENTITY_TYPES, PREDICATES, REVIEW_STATE


@dataclass
class Node:
    id: str
    type: str
    label: str
    props: dict = field(default_factory=dict)
    provenance: list = field(default_factory=list)


@dataclass
class Edge:
    id: str
    source: str
    target: str
    type: str
    props: dict = field(default_factory=dict)
    provenance: list = field(default_factory=list)
    review_state: str = REVIEW_STATE


class Graph:
    """Nodes keyed by id; edges keyed by (source, type, target, key).

    Two edges between the same nodes with different predicates are kept apart:
    the methodology treats them as different facts (Artifact #12 §2.6).
    """

    def __init__(self) -> None:
        self.nodes: dict[str, Node] = {}
        self.edges: dict[tuple, Edge] = {}

    def add_node(self, id: str, type: str, label: str, provenance: str | None = None, **props) -> Node:
        if type not in ENTITY_TYPES:
            raise ValueError(f"unknown entity type {type!r}")
        node = self.nodes.get(id)
        if node is None:
            node = self.nodes[id] = Node(id=id, type=type, label=label)
        elif node.type != type:
            raise ValueError(f"node {id!r} already has type {node.type!r}, not {type!r}")
        for k, v in props.items():
            if isinstance(v, (set, list)):
                node.props[k] = sorted(set(node.props.get(k, [])) | set(v))
            elif v is not None:
                node.props[k] = v
        if provenance and provenance not in node.provenance:
            node.provenance.append(provenance)
        return node

    def add_edge(self, source: str, type: str, target: str, provenance: str | None = None, key: str = "", **props) -> Edge:
        if type not in PREDICATES:
            raise ValueError(f"unknown predicate {type!r}")
        for end in (source, target):
            if end not in self.nodes:
                raise KeyError(f"edge endpoint {end!r} is not a node")
        k = (source, type, target, key)
        edge = self.edges.get(k)
        if edge is None:
            edge = self.edges[k] = Edge(id=f"e{len(self.edges) + 1}", source=source, target=target, type=type)
        for name, v in props.items():
            if isinstance(v, (set, list)):
                edge.props[name] = sorted(set(edge.props.get(name, [])) | set(v))
            elif v is not None:
                edge.props[name] = v
        if provenance and provenance not in edge.provenance:
            edge.provenance.append(provenance)
        return edge

    def out(self, source: str, type: str | None = None) -> list[Edge]:
        return [e for e in self.edges.values() if e.source == source and (type is None or e.type == type)]

    def inc(self, target: str, type: str | None = None) -> list[Edge]:
        return [e for e in self.edges.values() if e.target == target and (type is None or e.type == type)]

    def of_type(self, type: str) -> list[Node]:
        return [n for n in self.nodes.values() if n.type == type]

    def label(self, id: str) -> str:
        return self.nodes[id].label
