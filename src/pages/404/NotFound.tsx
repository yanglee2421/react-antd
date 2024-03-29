// Antd Imports
import { Button, Result } from "antd";

// Router Imports
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Not Found"
      extra={
        <Link to="/">
          <Button type="primary" size="large">
            Take me home
          </Button>
        </Link>
      }
    ></Result>
  );
}
