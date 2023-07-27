import { NavLink } from "react-router-dom";

export const AuthMenu = () => {
    return (
      <div style={{display:'flex', alignItems: 'center', gap: 20}}>
        <NavLink to="/register">Sign Up</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </div>
    );
}