"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const GallerySection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Fixed duplicate IDs and added proper image data
  const eventImages: GalleryImage[] = [
    { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0008.jpg?alt=media&token=1d916e5e-4ebf-4933-bc3d-53e82b338961', alt: "Govisarana Awareness programs" },
    { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0002.jpg?alt=media&token=314dc3b0-d5a7-4957-8d57-92963114e9a0', alt: "Govisarana  small groups - Weekly fair" },
    { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0003.jpg?alt=media&token=a02deb1b-a6df-4c24-8f1e-f3077c3260bc', alt: "Govisarana  small groups - Weekly fair" },
    { id: 4, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0004.jpg?alt=media&token=08a933bb-2107-4716-a981-f8fd0b8dcfc1', alt: "Govisarana  small groups - Weekly fair" },
    { id: 5, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0005.jpg?alt=media&token=ebf18170-84d3-4483-aea5-7d474e719066', alt: "Govisarana  small groups - Weekly fair" },
    { id: 6, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0006.jpg?alt=media&token=e3bb1a42-0341-4baf-b337-5a33c78ff0d3', alt: "Govisarana  small groups - Weekly fair" },
    { id: 7, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0007.jpg?alt=media&token=3d3829c3-3625-4e7e-86e0-c8e15b4241ec', alt: "Govisarana  small groups - Weekly fair" },
    { id: 8, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0009.jpg?alt=media&token=c39842a9-14bb-46c0-bbc9-62e574408b89', alt: "Govisarana Awareness programs" },
    { id: 9, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0010.jpg?alt=media&token=49f4cf8b-8439-4805-a52a-39c5e1a3092d', alt: "Govisarana Awareness programs" },
    { id: 10, src:'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0011.jpg?alt=media&token=84806888-5d43-4019-a13a-b4ebb508a55a', alt: "Govisarana Awareness programs" },
    { id: 11, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0012.jpg?alt=media&token=ea04c852-7712-4de8-90e1-f1767640e2ac', alt: "Govisarana Awareness programs" },
    { id: 12, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0013.jpg?alt=media&token=fe1c1d59-b9eb-40e0-9f8b-c079e28c3985', alt: "Govisarana Awareness programs" },
    { id: 13, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0014.jpg?alt=media&token=0ecc6e27-319d-4057-a0ca-9db5bf0c2e87', alt: "Govisarana Awareness programs" },
    { id: 14, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0015.jpg?alt=media&token=69723520-4caa-44e2-b0b4-b6fe9c5928c3', alt: "Govisarana Awareness programs" },
    { id: 15, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0016.jpg?alt=media&token=a0fb588f-5310-4196-a106-255f32c4629c', alt: "Govisarana Awareness programs" },
    { id: 16, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0017.jpg?alt=media&token=219b7bda-d7e4-4ea5-821b-53145e367b0b', alt: "Govisarana Awareness programs" },
    { id: 17, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0018.jpg?alt=media&token=7dbc3bb4-9e0d-4d2b-baf3-2686085fc958', alt: "Govisarana Awareness programs" },
    { id: 18, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0019.jpg?alt=media&token=b29736e9-e602-4088-b8a0-af3724f2bb75', alt: "Govisarana  small groups - Weekly fair" },
    { id: 19, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250910-WA0020.jpg?alt=media&token=4e189eef-1791-479e-925b-536f03716e2d', alt: "Govisarana  small groups - Weekly fair" },
    { id: 20, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250921-WA0002.jpg?alt=media&token=7150454d-f257-4784-b5f8-922a69fe0bd8', alt: "" },
    { id: 21, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250921-WA0003.jpg?alt=media&token=9f317d68-0561-4191-9fc0-1c47d6686226', alt: "" },
    { id: 22, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250921-WA0004.jpg?alt=media&token=d716322f-4d65-4cc5-a7ec-0e152eae2c26', alt: "" },
    { id: 23, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250921-WA0005.jpg?alt=media&token=2569a1a1-655b-4a5f-b846-dbfd03e38bf3', alt: "" },
    { id: 24, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250921-WA0006.jpg?alt=media&token=378db9e4-0469-4ad7-98d8-931499b46f6e', alt: "" },
    { id: 25, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250921-WA0007.jpg?alt=media&token=987929d2-5600-4d08-874b-9187a9781bec', alt: "" },
    { id: 26, src: 'https://firebasestorage.googleapis.com/v0/b/govisarana-project.firebasestorage.app/o/Gallery%2FIMG-20250921-WA0008.jpg?alt=media&token=233eb3c2-6321-4736-bcdc-d8ad782ffdaf', alt: "" },
  ];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isGalleryOpen || selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isGalleryOpen, selectedImage]);

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedImage(null);
  };

  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="gallery"
      className="relative py-16 bg-gray-900 mb-10"
      style={{
        backgroundImage: `url('farmer-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left side */}
          <motion.div
            className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Event Gallery</h2>
            <motion.div
              className="mb-6 overflow-hidden rounded-lg shadow-lg relative h-80"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={eventImages[6].src}
                alt="Event highlight"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <p className="text-gray-200 mb-6">
              Relive the memorable moments from our event. Browse through our
              collection of photos capturing the energy and excitement.
            </p>
           

            <Button type="button" onClick={openGallery} size="lg" className="p-6 !px-20 font-bold w-fit cursor-pointer">
                <Eye className="mr-2" />
                View Event Gallery
            </Button>

          </motion.div>

          {/* Right side */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {eventImages.slice(0, 4).map((image, index) => (
              <motion.div
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md relative h-48"
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  onClick={() => openImage(image)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Full gallery modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-16 relative">
              <motion.button
                onClick={closeGallery}
                className="fixed top-4 right-4 text-white hover:text-gray-300 z-50 bg-gray-800 rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Event Gallery
              </h2>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {eventImages.map((image) => (
                  <motion.div
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer h-64"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openImage(image)}
                    layoutId={`image-${image.id}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm">{image.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Single image modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 bg-gray-800 rounded-full p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            <motion.div
              className="relative max-w-4xl w-full h-full flex items-center justify-center"
              layoutId={`image-${selectedImage.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/70 px-4 py-2 rounded-lg">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;