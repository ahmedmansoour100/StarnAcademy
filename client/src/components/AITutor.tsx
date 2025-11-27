import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { Send, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AITutor() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "مرحباً! أنا AI-tutor، مساعدك الذكي في أكاديمية ستارن. يمكنك أن تسأل عن البرمجة والروبوتيكس والتكنولوجيا. كيف يمكنني مساعدتك؟" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "معذرة، حدث خطأ في معالجة سؤالك. يرجى المحاولة مرة أخرى." },
        ]);
      }
    } catch (error) {
      console.error("AI Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "حدث خطأ في الاتصال. يرجى التأكد من الاتصال بالإنترنت والمحاولة مرة أخرى." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className="fixed bottom-24 left-6 z-50 rounded-full w-16 h-16 p-0 shadow-lg border-0"
          data-testid="button-ai-tutor"
        >
          <img 
            src="/aitutor-logo.jpg" 
            alt="AI-Tutor" 
            className="w-full h-full object-cover rounded-full"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-right" data-testid="text-ai-tutor-title">AI-tutor</h2>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" data-testid="button-close-ai">
              <X className="h-4 w-4" />
            </Button>
          </DrawerClose>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4" data-testid="container-ai-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-start" : "justify-end"
              }`}
              data-testid={`message-${message.role}-${index}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.role === "user"
                    ? "bg-gray-200 text-gray-900"
                    : "bg-gradient-to-br from-[#1E40AF] to-[#1F3A93] text-white"
                }`}
              >
                <p className="text-sm break-words">{message.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-end">
              <div className="bg-gradient-to-br from-[#1E40AF] to-[#1F3A93] text-white px-4 py-2 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              placeholder="اسأل عن أي شيء..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              data-testid="input-ai-question"
            />
            <Button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-gradient-to-br from-[#1E40AF] to-[#1F3A93] hover:from-[#1E3BA0] hover:to-[#1F3A82]"
              size="icon"
              data-testid="button-send-ai"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
