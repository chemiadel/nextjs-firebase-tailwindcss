import Link from "next/link";

export default function Header(props: any) {
  return (
    <div className="flex h-full flex-row">
      <div className="flex-1 my-auto">
        <Link href="/">
          <button>دراي كلين الجامعه</button>
        </Link>
      </div>

      <div className="m-auto space-x-2">
      اسم له تاريخ
      </div>
    </div>
  );
}
