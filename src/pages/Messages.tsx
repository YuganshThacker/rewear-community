import { useState } from 'react';
import { Search, Send, MoreVertical, Phone, Video, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const mockConversations = [
  {
    id: 1,
    user: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50",
      online: true
    },
    lastMessage: "The jacket looks perfect! When can we arrange the swap?",
    timestamp: "2m ago",
    unread: 2,
    item: {
      title: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100"
    }
  },
  {
    id: 2,
    user: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50",
      online: false
    },
    lastMessage: "Thanks for the quick response!",
    timestamp: "1h ago",
    unread: 0,
    item: {
      title: "Silk Floral Dress",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100"
    }
  },
  {
    id: 3,
    user: {
      name: "Maya Patel",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b86d7e5d?w=50",
      online: true
    },
    lastMessage: "I'm interested in your boots!",
    timestamp: "3h ago",
    unread: 1,
    item: {
      title: "Leather Ankle Boots",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=100"
    }
  }
];

const mockMessages = [
  {
    id: 1,
    senderId: 1,
    content: "Hi Sarah! I'm really interested in your vintage denim jacket.",
    timestamp: "10:30 AM",
    type: "text"
  },
  {
    id: 2,
    senderId: 0, // Current user
    content: "Hi Emma! Thanks for your interest. It's in excellent condition and barely worn.",
    timestamp: "10:32 AM",
    type: "text"
  },
  {
    id: 3,
    senderId: 1,
    content: "That's great! I have a silk floral dress that might interest you. Would you like to see it?",
    timestamp: "10:35 AM",
    type: "text"
  },
  {
    id: 4,
    senderId: 0,
    content: "Yes, I'd love to see it! Feel free to send photos.",
    timestamp: "10:36 AM",
    type: "text"
  },
  {
    id: 5,
    senderId: 1,
    content: "The jacket looks perfect! When can we arrange the swap?",
    timestamp: "10:45 AM",
    type: "text"
  }
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = mockConversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardContent className="p-0">
              {/* Search */}
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Conversations */}
              <ScrollArea className="h-[calc(100vh-320px)]">
                <div className="space-y-1 p-2">
                  {filteredConversations.map((conv) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedConversation(conv)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                        selectedConversation.id === conv.id ? 'bg-muted' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={conv.user.avatar} />
                            <AvatarFallback>{conv.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          {conv.user.online && (
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-success rounded-full border-2 border-background"></div>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-sm truncate">{conv.user.name}</h3>
                            <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate mb-2">{conv.lastMessage}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img 
                                src={conv.item.image} 
                                alt={conv.item.title}
                                className="w-6 h-6 rounded object-cover"
                              />
                              <span className="text-xs text-muted-foreground truncate max-w-[100px]">
                                {conv.item.title}
                              </span>
                            </div>
                            {conv.unread > 0 && (
                              <Badge className="bg-primary text-xs px-2 py-1">
                                {conv.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-3 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedConversation.user.avatar} />
                    <AvatarFallback>{selectedConversation.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {selectedConversation.user.online && (
                    <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-success rounded-full border-2 border-background"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{selectedConversation.user.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <img 
                      src={selectedConversation.item.image} 
                      alt={selectedConversation.item.title}
                      className="w-4 h-4 rounded object-cover"
                    />
                    <span>{selectedConversation.item.title}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Video className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Info className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 0 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg px-4 py-2 ${
                        message.senderId === 0
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span className={`text-xs mt-1 block ${
                        message.senderId === 0 ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button onClick={sendMessage} className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}