export default function NotesRowItem(props) {
  return (
    <tr>
      <th scope="row">{props.note.rowNumber}</th>
      <th>{props.note.rowTitle}</th>
      <th>{props.note.rowDescription}</th>
    </tr>
  );
}