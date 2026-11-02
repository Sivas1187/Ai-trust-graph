/**
 * An author's note on one design choice: the methodology author's own
 * first-person statement from `authorNotes` in site-content.ts.
 */
export function AuthorNote({ note }: { note: { title: string; paragraphs: readonly string[] } }) {
  return (
    <div className="authorNote">
      <h4 className="subTitle">{note.title}</h4>
      {note.paragraphs.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      <p className="authorNoteBy">Siva Sethumadhavan, author</p>
    </div>
  );
}
