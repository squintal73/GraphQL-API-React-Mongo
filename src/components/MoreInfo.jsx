import { Container, Link } from "@mui/material";
export const MoreInfo = MoreInfoDocsLink

function MoreInfoItem({ children }) {
  return (
    <Container
      style={{ textAlign: "center", padding: "14px 0", marginTop: "auto" }}
    >
      {children}
    </Container>
  );
}

export function MoreInfoDocsLink() {
  const docsPath = "/docs/atlas/app-services/";
  const docsLink = new URL(docsPath, "https://mongodb.com");
  return (
    <MoreInfoItem>
      <span>{
        "SRQ info - 2023"
      }</span> |{" "}
      <Link target="_blank" href={docsLink}>
        Docs mongo
      </Link>
    </MoreInfoItem>
  );
}

