import AppHeader from "@/components/AppHeader";
import ChatInput from "@/components/ChatInput";
import MainBody from "@/components/MainBody";

export default function Page() {
  return (
    <>
      <AppHeader>
        <span></span>
      </AppHeader>
      <MainBody>
        <div className="app__messagelog">Test</div>
        <ChatInput />
      </MainBody>
    </>
  )
}
