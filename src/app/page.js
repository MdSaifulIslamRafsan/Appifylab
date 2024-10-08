import Newsletter from "@/components/Newsletter";
import TopCategories from "@/components/TopCategories";
import PopularCourses from "@/components/PopularCourses";


export default function Home() {
  return (
   <div>
    <TopCategories></TopCategories>
    <PopularCourses></PopularCourses>
    <Newsletter></Newsletter>
   </div>
  );
}
