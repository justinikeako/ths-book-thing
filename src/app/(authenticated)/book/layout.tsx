import { authGatewayRedirect } from "../auth-redirect";

export default function Layout(props: React.PropsWithChildren) {
  authGatewayRedirect();

  return <>{props.children}</>;
}
