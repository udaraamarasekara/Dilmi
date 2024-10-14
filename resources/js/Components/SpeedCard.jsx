export default function SpeedCard({
    children,
}) {
    return (
        <div className="w-full my-2 h-56 flex items-center justify-center" style={{background: 'linear-gradient(45deg, #009EFD, #2AF598)', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px'}} >
          <div className="bg-white" style={{width:'95%',height:'95%', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px'}} >  
          {children}

          </div> 
        </div>
    );
}
