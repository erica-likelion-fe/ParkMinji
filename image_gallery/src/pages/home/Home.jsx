import Header from '../../components/Header';
import Button from '../../components/Button';
import SectionHeader from './widgets/SectionHeader';
import GalleryGrid from './widgets/GalleryGrid';
import Pagination from './widgets/Pagination';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import SizedBox from '../../components/SizedBox';

export default function Home() {
    const navigate = useNavigate();
    return ( 
        <div className="home">
      <Header/>
      <SizedBox width={0} height={100}/>
      <Button onClick={() => navigate("/post")} children={"Create Posts"}/>
      <div style={{ padding: '40px' }}>
      <SectionHeader title="Image" />
      <GalleryGrid />
    </div>
    <Pagination currentPage={1} totalPages={10}></Pagination>
        </div>
    );
}




















