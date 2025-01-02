
export default function Modal({open , onClose, children}) {

    return (
        
        <div onClick={onClose}
            className={`fixed inset-0 flex justify-center 
            items-center transition-colors 
            ${open ? "visible bg-black/20" :"invisible"
            }`}
        >
            {
                
                <div 
                    onClick={(e) => e.stopPropagation()}
                    className={`bg-white rounded-xl shadow p-6 transition-all
                    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"

                    }`}  >

                    <div className="p-1">
                        <button 
                        onClick={onClose}
                        className="absolute font-bold top-2 right-2 p-1 w-auto rounded-lg 
                        text-gray-400 bg-red-600 hover:bg-gray-50 
                        hover:text-gray-600">
                            X
                        </button>
                    </div>

                    {children}
                </div>
            }
           
        </div>

    );
    
}