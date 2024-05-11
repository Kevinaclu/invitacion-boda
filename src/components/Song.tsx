export default function Song() {
  return (
    <audio
      controls
      controlsList="nodownload noplaybackrate"
      src="/01.mp3"
    ></audio>
  );

  // return (
  //   <section id="song" className="pt-8">
  //     <div className="flex flex-col">
  //       <div className="text-center">
  //         <p className="text-lg uppercase tracking-widest">
  //           Escucha nuestra canción
  //         </p>

  //         <div className="flex justify-center mt-4">
  //           <div className="w-64">
  //             <div className="relative">
  //               <audio controls className="w-full">
  //                 <source src="/01.mp3" type="audio/mpeg" />
  //                 Your browser does not support the audio element.
  //               </audio>
  //               <div className="absolute bottom-0 left-0 right-0 bg-gray-200">
  //                 <div className="flex items-center justify-between px-4 py-2">
  //                   <div className="flex items-center space-x-2">
  //                     <div className="w-8 h-8 bg-gray-400"></div>
  //                     <div className="text-sm">
  //                       Beautiful things - Benson Boone
  //                     </div>
  //                   </div>
  //                   <div className="flex items-center space-x-2">
  //                     <div className="w-4 h-4 bg-gray-400"></div>
  //                     <div className="w-4 h-4 bg-gray-400"></div>
  //                     <div className="w-4 h-4 bg-gray-400"></div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
