export const AuthInput = ({ type, label, value, placeholder, onChange }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input className="auth-input" type={type || "text"} placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};
