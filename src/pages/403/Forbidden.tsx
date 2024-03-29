// Antd Imports
import { Button, Result } from "antd";

// Router Imports
import { Link } from "react-router-dom";

export function Forbidden() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
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
