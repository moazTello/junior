import React from 'react';
import homebus from '../images/homebus.svg';
import { FaBus,
        //  FaToilet,
         FaHeadphonesAlt } from 'react-icons/fa';
// import {GiSandwich} from 'react-icons/gi';
import {AiOutlineWifi} from 'react-icons/ai';
import {MdOutlineAirlineSeatReclineExtra} from 'react-icons/md';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdOutlinePersonPinCircle} from 'react-icons/md';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
// import { format } from 'date-fns';
// import { Link } from 'react-router-dom';

const HomePage = () => {
  const {color,hoverColor} = useContext(DataContext);  
  // const date = format(new Date(),`MMMM dd, yyyy pp`);
  return (
    <div className='container' style={{overflow:'',height:'fit-content',minHeight:'71px',flexDirection:'column'}}>
       <div className='homeimge'>
         <img className='busimg' src={homebus} alt=''/>
         {/* <div className='tripsschedul' style={{height:'fit-content'}}>
            <div className='trip'>
              <p className='tripitem'> حجز</p>
              <p className='tripitem'>الوجهة </p>
              <p className='tripitem'> عدد المقاعد </p>
              <p className='tripitem'> تاريخ الرحلة</p>
            </div>
            <div className='trip'>
                    <Link to={`/login`} 
                          className='btn'
                          style={{marginLeft:"0px",borderRadius:"0px",
                                  width:"80px",border:"none"
                                  ,textDecoration:'none',paddingTop:'5px'}}   
                    >
                            حجز
                    </Link>
                    <p className='tripitem'>دمشق </p>
                    <p className='tripitem'>22</p>
                    <p className='tripitem'>{date}</p>
              </div>
         </div> */}
       </div>
       <div className='homesecdiv'>
        <div className='why' style={{backgroundColor:color,color:hoverColor}}>
          لماذا شركة ترافيل للنقل البري ؟
        </div>
        <div style={{width:'100%',paddingTop:'50px',paddingBottom:'50px',display:'flex',justifyContent:'center',flexFlow:'wrap'}}>
          <div className='iconscontainer'>
            <FaBus className='icons' style={{color:color}}/>
            <p className='iconstext' style={{color:color}}>باصات حديثة و مكيفة</p>  
          </div>
          <div className='iconscontainer'>
            <MdOutlinePersonPinCircle className='icons' style={{color:color}}/>
            <p className='iconstext' style={{color:color}}>أكثر من 500 وجهة</p>  
          </div>
          {/* <div className='iconscontainer'>
            <GiSandwich className='icons'/>
            <p className='iconstext'>تناول وجبة خفيفة </p>  
          </div> */}
          {/* <div className='iconscontainer'>
            <FaToilet className='icons'/>
            <p className='iconstext'>حمام داخل الباص</p>  
          </div> */}
          <div className='iconscontainer'>
            <BsFillPersonFill className='icons' style={{color:color}}/>
            <p className='iconstext' style={{color:color}}>خدمة زبائن 24/7</p>  
          </div>
          <div className='iconscontainer'>
            <AiOutlineWifi className='icons' style={{color:color}}/>
            <p className='iconstext' style={{color:color}}>شبكة انترنت مجانية</p>  
          </div>
          <div className='iconscontainer'>
            <FaHeadphonesAlt className='icons' style={{color:color}}/>
            <p className='iconstext' style={{color:color}}>موسقى هادئة ضمن الباص</p>  
          </div>
          <div className='iconscontainer'>
            <MdOutlineAirlineSeatReclineExtra className='icons' style={{color:color}}/>
            <p className='iconstext' style={{color:color}}>مقاعد مريحة</p>  
          </div>
        </div>
       </div>
       <div className='why' style={{backgroundColor:color,color:hoverColor}}>
          ميزات الحجز الالكتروني
        </div>
       <div className='thirdMain' >
          <div className='homethird' style={{color:color}}>
            <p className='thirdtitle' >أفضل طريقة لحجز تذكرة الحافلة</p>
            <p className='thirdcontent'>
            هل تريد معرفة أفضل طريقة لحجز التذاكر عبر الإنترنت بشكل آمن وكيفية حجز التذاكر مسبقًا؟
            </p>
            <p className='thirdcontent'>
            ترافيل هو أفضل منصة عبر الإنترنت لحجز الحافلات. يمكنك التحقق من وسائل الراحة المقدمة ، ومقارنة أسعار الحجز ، والتحقق من توقيت الحافلات في الطريق الذي تم البحث عنه ، والمرافق الأخرى والمزيد معنا. يمكنك العثور على تسهيلات حجوزات سفر عبر الإنترنت ميسورة التكلفة وفعالة من حيث التكلفة في ترافيل
            </p>
            <p className='thirdcontent'>
              مع ترافيل أصبح حجز تذاكر الحافلة عبر الإنترنت أمرًا سهلاً للغاية الآن. ما عليك سوى ملء تفاصيل رحلتك في شريط (موقع الصعود)  لدينا انقر فوق زر حجز . بعد ذلك ،أكمل حجزك بشكل آمن عبر الإنترنت على ترافيل 
            </p>
            <p className='thirdcontent'>
            نوصي بحجز تذاكرك قبل يومين إلى ثلاثة أيام على الأقل حتى تتمكن من حجز مقاعد الحافلة حسب تفضيلاتك والحصول على أفضل سعر مخفض على حجزك
            </p>
            <p className='thirdcontent'>
            تعتمد أجرة تذكرة الحافلة على العوامل التالية مثل المسافة التي ترغب في قطعها ، ونوع مشغل الحافلة ، ومسافة خطوط الحافلات بين الأصل وموقع الوجهة ، ووسائل الراحة التي يقدمها مشغل الحافلة ، وقد يختلف سعر تذكرة السفر في مواسم الأعياد. السفر بالحافلة هو الخيار الأفضل ، وخيار السفر الأكثر فعالية من حيث التكلفة والأكثر ملاءمة مقارنة بوسائل النقل الأخرى
            </p>
            <p className='thirdcontent'>
            قامت ترافيل بتبسيط عملية حجز الحافلات عبر الإنترنت لتخطيط سفرك. يمكنك توفير الوقت والمال باستخدام ترافيل  
            </p> 
          </div>

          <div className='homethird' style={{color:color}}>
            <p className='thirdtitle'>فوائد حجز تذاكر الحافلات عبر الإنترنت</p>
            <p className='thirdcontent'>
            في هذا اليوم وهذا عصر التكنولوجيا ، لم تعد الأنماط غير المتصلة بالإنترنت لحجز تذاكر الحافلة مفضلة. يعد حجز التذاكر عبر الإنترنت أمرًا سهلاً وسريعًا وخاليًا من المتاعب.
            </p>
            <p className='thirdcontent'>
            يتفوق ترافيل على الثلاثة من خلال التطبيق السهل والتنقل عبر الموقع الإلكتروني
            </p>
            <p className='thirdcontent'>
            أدى حجز تذاكر الحافلات عبر الإنترنت مع ترافيل إلى حل العديد من المشكلات التي يواجهها الأشخاص أثناء حجز تذاكرهم في عدادات غير متصلة بالإنترنت أو وكلاء سفر قم بتنزيل تطبيق ترافيل لمعرفة فوائد إجراء حجز تذكرة الحافلة عبر الإنترنت
            </p>
            <p className='thirdcontent'>
            فيما يلي سرد لجميع مزايا حجز تذاكر الحافلة عبر الإنترنت على ترافيل
            </p>
            <p className='thirdcontent'>
            تجنب الوقوف في طوابير طويلة عند عدادات تذاكر الحافلات غير المتصلة بالإنترنت _
            </p>
            <p className='thirdcontent'>
            لا مزيد من المتاعب في الاقتراب من وكلاء السفر _
            </p>
            <p className='thirdcontent'>
            احجز تذاكر الحافلات الخاصة عبر الإنترنت _
            </p>
            <p className='thirdcontent'>
            تحقق من توافر تذكرة الحافلة على الإنترنت _
            </p>
            <p className='thirdcontent'>
            24/7 دعم العملاء _
            </p>
            <p className='thirdcontent'>
            كل معاملة بسيطة وآمنة _
            </p>
          </div>
       </div>
    </div>
  )
}

export default HomePage;