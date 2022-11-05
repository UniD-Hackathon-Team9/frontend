import Header from "../components/layout/Header";
import MobileLayout from "../components/layout/MobileLayout";
import Reccomend from "../components/recommend";

export default function Aaaa() {
  return (
    <div>
      <Header />
      <MobileLayout>
        <Reccomend
          day={1}
          address="서울시 강동구 울릉도"
          index={3}
          name="명륜진사갈비"
          tag={["맛있다", "감성있는", "미친"]}
        />
      </MobileLayout>
    </div>
  );
}
