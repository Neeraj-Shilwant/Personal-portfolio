import React,{useState} from 'react'

const Service = () => {
    const [activeModal, setActiveModal] = useState(null);
    const openModal = (index) => {
        setActiveModal(index);
        document.body.classList.add('disable-scroll');
      };
    
      const closeModal = () => {
        setActiveModal(null);
        document.body.classList.remove('disable-scroll');
      };
      const servicesData = [
        {
          title: 'Web Development',
          iconClass: '',
          modalTitle: 'Web Developer',
          modalServices: [
            'I develop web applications with end to end solutions for frontend and backend',
            'I handle website deployment',
            'I optimize website performance',
            'I help in integrating Machine Learning models.'
          ]
        },
        {
          title: 'Data Scientist',
          iconClass: 'data-scientist-icon', // Example of an icon class
          modalTitle: 'Data Scientist',
          modalServices: [
            'I provide Data Handling',
            'I create Machine Learning Models',
            'I handle cross platform deployment',
            'I optimize application performances'
          ]
        }
      ];
      
  return (
    <>
    {/* <!--==================== SERVICES ====================--> */}

    <section class="services section" id="services">
      <h1 class="section__title">Services</h1>
      <span class="section__subtitle">What I offer</span>

      <div class="services__container container grid">
        {/* <!--==================== SERVICE 1 ====================--> */}
        {servicesData.map((service,index)=>(
          <div class="services__content" key={index}>
          <div>
            <i class={`uil uil-arrow services__icon ${service.iconClass}`}></i>
            <h3 class="services__title">${service.title}</h3>
          </div>

          <span
            class="button button--flex button--small button--link services__button"
            onClick={()=>openModal(index)}
          >
            View More
            <i class="uil uil-arrow-right button__icon"></i>
          </span>

          <div class={`services__modal ${activeModal===index? 'active-modal':''} `}>
            <div class="services__modal-content">
              <h4 class="services__modal-title">${service.title}</h4>
              <i class="uil uil-times services__modal-close" onClick={closeModal}></i>
              <ul class="services__modal-services grid">
                {service.modalServices.map((item,subindex)=>(
                  <li class="services__modal-service" key={subindex}>
                  <i class="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    {item}
                  </p>
                </li>
                ))}
                
                
              </ul>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </section>
    </>
  )
}

export default Service;