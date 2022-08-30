import Slide from "./components/Slide";

export default function Home() {
  const slides = [
    {
      id: "bee1",
      text: "bee 1",
      imageUrl: "https://images.unsplash.com/photo-1576347819574-903b60efcd69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80" 
    },
    {
      id: "bee2",
      text: "bee 2",
      imageUrl: "https://images.unsplash.com/photo-1539313373344-88bbfb9ac83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=956&q=80"
    },
    {
      id: "bee3",
      text: "bee 3",
      imageUrl: "https://images.unsplash.com/photo-1568526381923-caf3fd520382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
    }
  ]

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Save the <span style={{ color: '#F8B21C'}}>Bees</span>!</h1>
      <Slide slides={slides} />
    </div>
  )
}
