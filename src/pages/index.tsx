import { NextPage } from "next";
import ClubAuth from "../components/ClubAuth";
const Index: NextPage = () => {


  return (
    <main className="mx-10 xl:mx-20 xl:flex 2xl:mx-32 ">
      <h1
        className="text-6xl mt-4 font-bold leading-[1.2] tracking-wide
      xl:w-2/4 xl:text-8xl xl:mr-4 xl:leading-[1.25] "
      >
        Generate Your AICTE Diary 🔖
      </h1>
      <form
        className="mt-6 block xl:mt-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="UID" className="text-2xl font-medium xl:text-4xl ">
          Enter your UID 🪪
        </label>
        <input
          name="UID"
          className="w-full border-2 bg-transparent border-blue-600 py-4 rounded-2xl mt-2 outline-none
        pl-4 text-slate-900 placeholder:text-slate-600  font-semibold
        focus:text-lg  transition-all focus:ring-4 ring-blue-300
        xl:mt-4 xl:py-5
        "
          placeholder="Enter your UID Here"
        />
        <span
          className="block tracking-wider bg-orange-200 rounded-2xl px-4 py-2 mt-3
        xl:mt-6 "
        >
          Format: [Admission Year]-[Department name][Roll No.]-[Graduation Year]
        </span>
        <span
          className="block tracking-wider bg-yellow-200 rounded-xl px-4 py-2 mt-2 
        xl:mt-3 "
        >
          Example: 21-AIML64-24
        </span>

        <button
          type="submit"
          className="bg-green-400 ring-4 ring-green-200  hover:ring-green-300 w-full mt-12 btnFtrs
        "
        >
          🚀 Generate 🚀
        </button>
      </form>

      <ClubAuth />
    </main>
  );

  // return (
  //   <ClientOnly>
  //     <div>
  //       <div>
  //         <pre className="mb-8">
  //           {JSON.stringify(
  //             {
  //               value: state.value,
  //               context: state.context,
  //             },
  //             null,
  //             2
  //           )}
  //         </pre>
  //         <div className="flex gap-x-5">
  //           {state.nextEvents.map((event) => (
  //             <button key={event} onClick={() => send(event)}>{event}</button>
  //           ))}
  //         </div>
  //         <div className="flex gap-x-5 ">
  //           {state.matches("displayingClubsList") &&
  //             state.context.clubList.map((c) => (
  //               <span key={c.name} className="cursor-pointer" onClick={() =>
  //               send({ type: "SELECT_CLUB", club: c })}>
  //                 {c.name}
  //               </span>
  //             ))}
  //         </div>
  //         {state.matches("promtEnterPassword") && (
  //           <form onSubmit={(f) => {
  //             f.preventDefault()
  //             send({type: "VALIDATE_AUTH",password: f.currentTarget["PASSWORD"].value })
  //             }} >
  //           <input
  //             type="password"
  //             name="PASSWORD"
  //             placeholder="enter your password"
  //           />
  //           <button type="submit">Submit</button>
  //           </form>
  //         )}
  //       </div>
  //       {/* <div className="mt-10">
  //       <pre className="mb-8">
  //         {JSON.stringify(
  //           {
  //             value: state2.value,
  //             context: state2.context,
  //           },
  //           null,
  //           2
  //         )}
  //       </pre>
  //       <div className="flex gap-x-5" >
  //         {state2.nextEvents.map((event) => (
  //           <button onClick={() => send2(event)}>{event}</button>
  //         ))}
  //       </div>
  //     </div> */}
  //     </div>
  //   </ClientOnly>
  // );
};

export default Index;
