function ClassCard({ subject, room, time, isLab }) {
  return (
    <div className="class-card">
      <h3>{subject}</h3>
      <p>{room} • {time}</p>
      {isLab && <span className="badge">Lab</span>}
    </div>
  );
}

export default ClassCard;