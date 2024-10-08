import Newsletter from "@/components/Newsletter";
import TopCategories from "@/components/TopCategories";
import Features from "@/components/Features";
import PopularCourses from "@/components/PopularCourses";


export default function Home() {
  return (
   <div>
    <Features></Features>
    <TopCategories></TopCategories>
    <PopularCourses></PopularCourses>
    <Newsletter></Newsletter>
   </div>
  );
}
