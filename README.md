# Chat2Pdf

## Description

A modern **Retrieval-Augmented Generation (RAG)** chatbot application that enables users to upload PDF documents and interact with them through an intelligent AI-powered chat interface. The application processes documents, creates vector embeddings, and uses semantic search to provide accurate, context-aware responses based on the uploaded content.

## What Your Application Does

This RAG chatbot application allows users to:

- **Upload PDF Documents**: Users can upload PDF files through a simple interface
- **Process & Store Documents**: PDFs are parsed, chunked into manageable pieces, and stored in a vector database with embeddings
- **Query Knowledge Base**: Users can ask questions in natural language, and the system searches through uploaded documents to find relevant information
- **Get AI-Powered Answers**: The chatbot uses OpenAI's GPT models to generate contextual responses based on the retrieved document chunks, providing accurate answers grounded in the uploaded content

The application combines the power of vector similarity search with large language models to create an intelligent document Q&A system.

## Main Features

1. **PDF Document Upload & Processing**

   - Upload PDF files through an intuitive web interface
   - Automatic text extraction and intelligent chunking using LangChain text splitters
   - Vector embedding generation using OpenAI's text-embedding-3-small model
   - Efficient storage in PostgreSQL with pgvector extension for vector operations

2. **Intelligent Vector Search**

   - Semantic search using cosine similarity to find the most relevant document chunks
   - HNSW (Hierarchical Navigable Small World) indexing for fast similarity searches
   - Configurable similarity thresholds and result limits
   - Real-time query embedding generation for accurate search results

3. **AI-Powered Chat Interface**
   - Modern, responsive chat UI built with React and Next.js
   - Streaming responses for real-time user experience
   - Tool-based architecture that automatically searches the knowledge base when needed
   - Context-aware responses that cite relevant document sections

## Why You Used the Technologies You Used

- **Next.js 16**: Chosen for its excellent React Server Components support, API routes, and seamless deployment on Vercel. The App Router provides a modern, efficient routing system.

- **TypeScript**: Ensures type safety across the codebase, reducing runtime errors and improving developer experience with better IDE support and autocomplete.

- **Drizzle ORM**: Selected for its excellent TypeScript support, lightweight footprint, and powerful query builder. It provides type-safe database operations and works seamlessly with PostgreSQL vector operations.

- **PostgreSQL + pgvector (Neon)**: PostgreSQL with pgvector extension enables efficient vector similarity searches. Neon provides serverless PostgreSQL, making it perfect for scalable deployments with automatic scaling.

- **OpenAI AI SDK**: The Vercel AI SDK provides a unified interface for working with OpenAI models, including streaming support, tool calling, and embedding generation, which are essential for RAG functionality.

- **React 19 + AI SDK React**: Latest React features combined with AI SDK React hooks provide excellent developer experience for building chat interfaces with streaming support.

- **Tailwind CSS + Radix UI**: Tailwind CSS enables rapid UI development with utility classes, while Radix UI provides accessible, unstyled components that can be customized to match the design system.

- **LangChain Text Splitters**: Used for intelligent document chunking that preserves context and semantic meaning, crucial for effective RAG retrieval.

## Challenges You Faced

1. **Type Compatibility Issues**: Encountered TypeScript errors with `drizzle-kit` v0.18.1 not exporting `defineConfig`, requiring configuration adjustments. Also faced issues with `react-resizable-panels` v4 API changes where component names changed from `PanelGroup` to `Group` and `PanelResizeHandle` to `Separator`.

2. **AI SDK Version Compatibility**: Had to handle state properties that are only available in AI SDK v6, requiring type assertions and careful handling of optional features across different SDK versions.

3. **Vector Search Optimization**: Implementing efficient vector similarity search with proper indexing (HNSW) and tuning similarity thresholds to balance relevance and recall.

4. **Document Chunking Strategy**: Determining optimal chunk sizes and overlap to maintain context while ensuring embeddings capture semantic meaning effectively.

5. **Streaming Response Handling**: Implementing proper streaming for real-time chat experience while maintaining error handling and connection stability.

6. **Build & Deployment Issues**: Resolving TypeScript strict mode errors during Vercel builds, including handling `@ts-expect-error` directives that weren't working in production builds.

## Features You Hope to Implement in the Future

1. **Multi-Format Document Support**: Extend beyond PDFs to support Word documents, text files, markdown, and web page scraping for more versatile knowledge base creation.

2. **User Authentication & Multi-Tenancy**: Implement user accounts with Clerk to allow multiple users to maintain separate knowledge bases and chat histories.

3. **Chat History & Persistence**: Store conversation history in the database, allowing users to revisit previous conversations and maintain context across sessions.

4. **Document Management Dashboard**: Create an interface for users to view, search, delete, and manage their uploaded documents with metadata like upload date, file size, and chunk count.

5. **Citation & Source Tracking**: Enhance responses to include clickable citations that link back to specific document sections, improving transparency and allowing users to verify information.

6. **Advanced Search Features**: Implement filters by document, date range, and content type. Add support for hybrid search combining keyword and semantic search.

7. **Export & Sharing**: Allow users to export conversations as PDF or markdown, and share knowledge bases with team members.

8. **Real-time Collaboration**: Enable multiple users to collaborate on the same knowledge base with real-time updates and notifications.

9. **Custom Embedding Models**: Support for custom embedding models and fine-tuning for domain-specific use cases.

10. **Analytics & Insights**: Provide analytics on document usage, query patterns, and most frequently accessed information to help users understand their knowledge base better.

#### 1. Set up environment variables

Create a `.env.local` file:

```env
NEON_DATABASE_URL=""
OPENAI_API_KEY=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
```
