import { Component, createSignal } from 'solid-js';

const App: Component = () => {
  const [getProfileLink] = createSignal('https://github.com/allanrg4')

  return (
    <div>
      <div class='flex flex-row h-screen'>
        <div class='basis-1/2 flex justify-center items-center bg-primary'>
          <div class='w-1/2'>
            <img src="https://images.pexels.com/photos/12568038/pexels-photo-12568038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Site Header Image" />
          </div>
        </div>

        <div class='basis-1/2 flex justify-center items-center'>
          <div class='w-2/3'>
            <p class='text-2xl font-thin text-center'>
              👋🏼 Hi There! 👋🏼
              <br/><br/>

              I'm <a class='no-underline' href={getProfileLink()} target='_blank'><strong>Allan Garcia</strong></a> a Full-Stack Web Developer working on Guatemala City 🇬🇹
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
