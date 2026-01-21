import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { containerVariants, itemVariants } from '../utils/animations';

// Work environment images for carousel - replace with your actual images
const workEnvironmentImages = [
  {
    id: 1,
    src: '/work-environment/office-space-1.jpg',
    alt: 'Modern office workspace',
    caption: 'Our modern Alexandria headquarters',
    description: 'State-of-the-art office space designed for collaboration and innovation'
  },
  {
    id: 2,
    src: '/work-environment/team-collaboration.jpg',
    alt: 'Team collaboration session',
    caption: 'Collaborative team meetings',
    description: 'Our team working together to deliver exceptional results'
  },
  {
    id: 3,
    src: '/work-environment/workspace-setup.jpg',
    alt: 'Professional workspace setup',
    caption: 'State-of-the-art workstations',
    description: 'Modern workstations equipped with the latest technology'
  },
  {
    id: 4,
    src: '/work-environment/break-area.jpg',
    alt: 'Employee break area',
    caption: 'Comfortable break areas',
    description: 'Relaxing spaces for team members to recharge and connect'
  },
  {
    id: 5,
    src: '/work-environment/meeting-room.jpg',
    alt: 'Conference room',
    caption: 'Modern meeting facilities',
    description: 'Professional meeting rooms for client presentations and team discussions'
  },
  {
    id: 6,
    src: '/work-environment/team-lunch.jpg',
    alt: 'Team lunch gathering',
    caption: 'Team bonding moments',
    description: 'Building strong relationships through shared experiences'
  },
  {
    id: 7,
    src: '/work-environment/tech-setup.jpg',
    alt: 'Technology infrastructure',
    caption: 'Advanced technology setup',
    description: 'Cutting-edge technology supporting our operations'
  },
  {
    id: 8,
    src: '/work-environment/office-view.jpg',
    alt: 'Office view and atmosphere',
    caption: 'Inspiring work environment',
    description: 'A welcoming atmosphere that fosters creativity and productivity'
  }
];

export default function WorkEnvironment() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState<typeof workEnvironmentImages[0] | null>(null);

  // Debug logging
  console.log('Current image index:', currentImageIndex);
  console.log('Current image src:', workEnvironmentImages[currentImageIndex].src);
  console.log('All images:', workEnvironmentImages.map(img => img.src));

  // Test image loading
  const testImageLoad = () => {
    const img = new Image();
    img.onload = () => console.log('✅ Test image loaded successfully');
    img.onerror = () => console.log('❌ Test image failed to load');
    img.src = workEnvironmentImages[currentImageIndex].src;
  };

  // Test on component mount
  useEffect(() => {
    testImageLoad();
    
    // Additional test - try to load image directly
    const testImg = document.createElement('img');
    testImg.onload = () => {
      console.log('✅ Direct image test successful:', workEnvironmentImages[currentImageIndex].src);
    };
    testImg.onerror = () => {
      console.log('❌ Direct image test failed:', workEnvironmentImages[currentImageIndex].src);
    };
    testImg.src = workEnvironmentImages[currentImageIndex].src;
  }, [currentImageIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === workEnvironmentImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? workEnvironmentImages.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === workEnvironmentImages.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50 mb-6 backdrop-blur-sm shadow-lg"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
            <span className="text-amber-800 text-sm font-medium tracking-wide uppercase">Work Environment</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Where <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Excellence</span> Happens
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Discover our Alexandria headquarters where our 120+ team members collaborate, innovate, and deliver 
            operational excellence for our UK hotel portfolio. A family-built culture meets modern professional standards.
          </motion.p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          className="relative max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            {/* Image Display */}
            <div 
              className="relative aspect-[16/10] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 cursor-pointer group overflow-hidden"
              onClick={() => setSelectedImage(workEnvironmentImages[currentImageIndex])}
            >
              {/* Main Image Display */}
              <div className="absolute inset-0">
                {/* Try to load the actual image first */}
                <img
                  src={workEnvironmentImages[currentImageIndex].src}
                  alt={workEnvironmentImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                  style={{ zIndex: 10, position: 'absolute', top: 0, left: 0 }}
                  onLoad={(e) => {
                    console.log('✅ Image loaded successfully:', workEnvironmentImages[currentImageIndex].src);
                    const target = e.target as HTMLImageElement;
                    console.log('Image dimensions:', target.naturalWidth, 'x', target.naturalHeight);
                    // Hide placeholder when image loads
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'none';
                  }}
                  onError={(e) => {
                    console.log('❌ Image failed to load:', workEnvironmentImages[currentImageIndex].src);
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    // Show placeholder when image fails
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Placeholder - always present but hidden when image loads */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200" style={{ zIndex: 5 }}>
                  <div className="text-center">
                    {/* Professional Icon */}
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{workEnvironmentImages[currentImageIndex].caption}</h3>
                    <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">{workEnvironmentImages[currentImageIndex].description}</p>
                    <div className="mt-4 inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Click to view full image
                    </div>
                  </div>
                  </div>
                </div>
                
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{workEnvironmentImages[currentImageIndex].caption}</h3>
                  <p className="text-lg opacity-90 max-w-2xl">{workEnvironmentImages[currentImageIndex].description}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 hover:bg-white text-gray-700 hover:text-amber-600 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-100"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 hover:bg-white text-gray-700 hover:text-amber-600 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-100"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAutoPlaying(!isAutoPlaying);
                }}
                className="absolute top-6 right-6 w-12 h-12 bg-white/95 hover:bg-white text-gray-700 hover:text-amber-600 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-gray-100"
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isAutoPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 border-t border-gray-100">
              <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                {workEnvironmentImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden transition-all duration-300 group ${
                      index === currentImageIndex
                        ? 'ring-3 ring-amber-500 scale-105 shadow-lg'
                        : 'opacity-70 hover:opacity-100 hover:scale-105 hover:shadow-md'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback Thumbnail Placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 via-gray-200 to-slate-300 flex items-center justify-center group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-300" style={{ display: 'none' }}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-1 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-700 group-hover:text-amber-800 transition-colors">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {workEnvironmentImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-amber-400 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="text-center mt-4">
            <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 shadow-lg border border-gray-100">
              <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {currentImageIndex + 1} of {workEnvironmentImages.length}
            </span>
          </div>
        </motion.div>

        {/* Company Culture Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { number: '120+', label: 'Team Members', icon: '👥' },
            { number: '24/7', label: 'Operations', icon: '⏰' },
            { number: '7', label: 'Departments', icon: '🏢' },
            { number: '120+', label: 'UK Hotels Managed', icon: '🏨' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Culture Highlights */}
        <motion.div
          className="mt-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-8 md:p-12 border border-amber-200/50"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              A Family-Built Professional Environment
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              Our Alexandria headquarters embodies the perfect blend of family values and professional excellence. 
              We've created an environment where every team member can thrive, grow, and contribute to our shared 
              mission of operational excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🤝', title: 'Collaborative Culture', desc: 'Open communication and teamwork' },
                { icon: '📈', title: 'Growth Opportunities', desc: 'Continuous learning and development' },
                { icon: '⚡', title: 'Modern Technology', desc: 'Cutting-edge tools and systems' }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="text-4xl mb-3">{highlight.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="max-w-5xl max-h-[95vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Display */}
            <div className="aspect-video bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 relative overflow-hidden">
              {/* Actual Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              
              {/* Fallback Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">{selectedImage.caption}</h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{selectedImage.description}</p>
                  <div className="mt-6 inline-flex items-center px-6 py-3 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Full image will appear here
                  </div>
              </div>
            </div>
            
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8 bg-gradient-to-r from-slate-50 to-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.caption}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{selectedImage.description}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}