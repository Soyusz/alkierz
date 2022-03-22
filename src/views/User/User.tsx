import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Gallery } from "../../components/Gallery";
import { useUser } from "../../queries/useUser";

export const User = () => {
  const { userId } = useParams();
  const { data: user } = useUser(userId ?? "");

  if (!userId) return null;

  return (
    <>
      <Container>
        <Skeleton width="200px" />
        <h1>user screen </h1>
        <h2>{userId}</h2>
        <h4>{user?.name || <Skeleton width="9ex" />}</h4>
        <h4>{user?.role || <Skeleton />}</h4>
        <Gallery userId={userId} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
