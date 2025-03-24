import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="my-10">{children}</main>
      <footer className="text-center text-xs sm:text-sm md:text-base bg-gray-400 rounded-xl py-3">
        <p>Designed and Developed by Amirali Mansouri | Github</p>
      </footer>
    </>
  );
}
