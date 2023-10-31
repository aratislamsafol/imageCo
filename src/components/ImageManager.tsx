import img1 from '../assets/images/image-1.webp';
import img2 from '../assets/images/image-2.webp';
import img3 from '../assets/images/image-3.webp';
import img4 from '../assets/images/image-4.webp';
import img5 from '../assets/images/image-5.webp';
import img6 from '../assets/images/image-6.webp';
import img7 from '../assets/images/image-7.webp';
import img8 from '../assets/images/image-8.webp';
import img9 from '../assets/images/image-9.webp';
import img10 from '../assets/images/image-10.jpeg';
import img11 from '../assets/images/image-11.jpeg';

export default function ImageManager() {
    return (
        <div className="wrapper">
            <div className="actionContent">
                <p>img Selected</p>
                <p>img Selected</p>
            </div>
            <div className="container">
                <div className="item big">
                    <img src={img1} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img2} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img3} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img4} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img5} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img6} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img7} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img8} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img9} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img10} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
                <div className="item">
                    <img src={img11} alt="" />
                    <input type="checkbox" name="" id="" />
                    <div className="overlay"></div>
                </div>
            </div>
        </div>
    );
}
