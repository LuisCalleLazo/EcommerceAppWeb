import { NavItem } from "../../components";

export function LogoutModal() {
  return (
    <div className="absolute top-full right-0 bg-white shadow-md rounded-md p-2 w-[200px] z-50">
      <ul>
        <NavItem icon="bi bi-box-arrow-in-right" label="Iniciar Session"/>
        <NavItem icon="bi bi-box-arrow-in-right" label="Registrarse"/>
        {/* <NavItem icon="bi bi-box-arrow-in-left" label="Cerrar Session"/> */}
      </ul>
    </div>
  )
}