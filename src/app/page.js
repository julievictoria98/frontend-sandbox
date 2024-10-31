import CookieContent from "@/components/CookieContent";
import If from "@/components/If";

export default function Home() {
  const CookieIsAccepted = true;
  return (
    <If condition={CookieIsAccepted}>
      <CookieContent />
    </If>
  );
}
