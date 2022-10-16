import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div
      className="flex flex-col min-h-screen container mx-auto md:w-11/12  lg:w-4/5
    divide-y divide-black-500"
    >
      <div className=" h-16 ">
        <Header />
      </div>
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
