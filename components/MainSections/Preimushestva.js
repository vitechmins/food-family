import React from 'react';

const Preimushestva = () => {
  const data = [
    {
      title: "Всегда свежие продукты",
      description: "Мы тщательно выбираем свежие ингредиенты для наших блюд, чтобы гарантировать высокое качество и непревзойденный вкус."
    },
    {
      title: "Разработка меню",
      description: "Наша команда творчески подходит к созданию меню, стремясь удивить вас разнообразием блюд и интересными сочетаниями."
    },
    {
      title: "Быстрое обслуживание",
      description: "Мы ценим ваше время и стараемся обеспечить быстрое и эффективное обслуживание, чтобы вы могли наслаждаться нашими блюдами без лишних ожиданий."
    },
    {
      title: "Всегда вкусные блюда",
      description: "Наша главная цель - порадовать вас вкусными и качественными блюдами каждый раз, когда вы посещаете наше кафе."
    },
  ];


  return (
    <section className='bg-white relative py-14'>
      <div className='container mx-auto'>
        <h5 className='sd:text-4xl xz:text-2xl text-center font-semibold'>
          Почему выбирают нас 
        </h5>
        <div className='grid sd:grid-cols-4 xz:grid-cols-1 gap-4 mt-8'>
          {data.map((item, index) => (
            <div key={index} className="card mx-auto shadow-xl image-full">
              <figure><img src={`/preimushestva/${index + 1}.webp`} alt="преимущества кафе в Минске" /></figure>
              <div className="card-body flex flex-col justify-between h-full">
                <h6 className="card-title ">
                  {item.title}
                </h6>
                <p className='text-sm mt-4'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Preimushestva;
