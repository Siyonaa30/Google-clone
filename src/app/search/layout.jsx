import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

export const metadata = {
  title: "Google Clone",
  description: "google clone created by nextjs 13",
};

export default function SearchLayout({ children }) {
  return (
      <div>
        <SearchHeader />
        {children}
      </div>
  );
}
