import ButtonCreatePost from "@/components/ui/button-create-post";
import Publication from "@/components/ui/publication";

export default function Home() {
  return (
    <div className="max-h-[calc(100vh-84px)] overflow-hidden">
      <ButtonCreatePost />
      <Publication />
    </div>
  )
}
