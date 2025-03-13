export const NEWS = [
  {
    title: "Tech Giants Unveil AI Breakthrough",
    publishedDate: "2025-03-12",
    lineCount: 25,
    commentCount: 120,
    viewsCount: 35000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar1.jpg",
      name: "Tech Insider",
    },
  },
  {
    title: "Stock Market Hits Record High",
    publishedDate: "2025-03-11",
    lineCount: 30,
    commentCount: 85,
    viewsCount: 27000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar2.jpg",
      name: "Finance Daily",
    },
  },
  {
    title: "New Space Mission to Mars Announced",
    publishedDate: "2025-03-10",
    lineCount: 40,
    commentCount: 200,
    viewsCount: 45000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar3.jpg",
      name: "Space Explorer",
    },
  },
  {
    title: "AI Revolutionizes Healthcare Industry",
    publishedDate: "2025-03-09",
    lineCount: 50,
    commentCount: 300,
    viewsCount: 52000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar4.jpg",
      name: "HealthTech News",
    },
  },
  {
    title: "Electric Cars: The Future of Transportation",
    publishedDate: "2025-03-08",
    lineCount: 35,
    commentCount: 150,
    viewsCount: 41000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar5.jpg",
      name: "Auto Trends",
    },
  },
  {
    title: "Blockchain Technology's Role in Finance",
    publishedDate: "2025-03-07",
    lineCount: 60,
    commentCount: 250,
    viewsCount: 37000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar6.jpg",
      name: "Crypto World",
    },
  },
  {
    title: "Climate Change: Global Efforts to Tackle the Crisis",
    publishedDate: "2025-03-06",
    lineCount: 45,
    commentCount: 180,
    viewsCount: 30000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar7.jpg",
      name: "Global News",
    },
  },
  {
    title: "The Rise of Quantum Computing",
    publishedDate: "2025-03-05",
    lineCount: 55,
    commentCount: 230,
    viewsCount: 44000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar8.jpg",
      name: "Tech Daily",
    },
  },
  {
    title: "New Smartphone Technologies You Need to Know",
    publishedDate: "2025-03-04",
    lineCount: 40,
    commentCount: 175,
    viewsCount: 39000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar9.jpg",
      name: "SmartTech",
    },
  },
  {
    title: "Artificial Intelligence in Everyday Life",
    publishedDate: "2025-03-03",
    lineCount: 60,
    commentCount: 210,
    viewsCount: 46000,
    thumbnail:
      "https://images.unsplash.com/photo-1615357291590-534b23453de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publisher: {
      avatar: "https://example.com/avatar10.jpg",
      name: "AI World",
    },
  },
];

export type NewsItem = (typeof NEWS)[number];
