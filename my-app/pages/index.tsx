import { Button, Card, CardListContainer, ProfileUser } from "../components";

export default function Page() {
  return (
    <div className="bg-dark min-h-screen">
      <ProfileUser name="caca" imageUrl="/images/avatar.png" />
      <CardListContainer />
      <Button>Click me</Button>
    </div>
  );
}