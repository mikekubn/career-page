import ImageTooltip from '../ImageTooltip';

const Gallery = () => (
  <div className="justify-center mx-auto mb-10 mt-5 flex flex-col md:my-auto lg:h-96">
    <div className="flex flex-row">
      <ImageTooltip
          positon="justify-center"
          root="technology/typescript_n"
          alt="Technology typescript"
          tooltip="Typescript"
        />
      <ImageTooltip
          positon="justify-center"
          root="technology/cypress"
          alt="Technology cypress"
          tooltip="Cypress"
        />
      <ImageTooltip
          positon="justify-center"
          root="technology/react"
          alt="Technology react"
          tooltip="React"
        />
    </div>
    <div className="flex flex-row">
      <ImageTooltip
          rtl
          positon="justify-center"
          root="technology/javascript_n"
          alt="Technology javascript"
          tooltip="Javascript"
        />
      <ImageTooltip
          rtl
          positon="justify-center"
          root="technology/nuxt"
          alt="Technology nuxt"
          tooltip="Nuxt"
        />
      <ImageTooltip
          rtl
          positon="justify-center"
          root="technology/framer"
          alt="Technology framer"
          tooltip="Framer"
        />
    </div>
  </div>
);

export default Gallery;