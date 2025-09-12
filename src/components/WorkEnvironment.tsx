import { motion } from 'framer-motion';
import { useState } from 'react';
import { containerVariants, itemVariants } from '../utils/animations';

// Placeholder for work environment images - replace with your actual images
const workEnvironmentImages = [
  {
    id: 1,
    src: '/work-environment/office-space-1.jpg',
    alt: 'Modern office workspace',
    caption: 'Our modern Alexandria headquarters',
    category: 'Office Space'
  },
  {
    id: 2,
    src: '/work-environment/team-collaboration.jpg',
    alt: 'Team collaboration session',
    caption: 'Collaborative team meetings',
    category: 'Team Culture'
  },
  {
    id: 3,
    src: '/work-environment/workspace-setup.jpg',
    alt: 'Professional workspace setup',
    caption: 'State-of-the-art workstations',
    category: 'Technology'
  },
  {
    id: 4,
    src: '/work-environment/break-area.jpg',
    alt: 'Employee break area',
    caption: 'Comfortable break areas',
    category: 'Amenities'
  },
  {
    id: 5,
    src: '/work-environment/meeting-room.jpg',
    alt: 'Conference room',
    caption: 'Modern meeting facilities',
    category: 'Office Space'
  },
  {
    id: 6,
    src: '/work-environment/team-lunch.jpg',
    alt: 'Team lunch gathering',
    caption: 'Team bonding moments',
    category: 'Team Culture'
  },
  {
    id: 7,
    src: '/work-environment/tech-setup.jpg',
    alt: 'Technology infrastructure',
    caption: 'Advanced technology setup',
    category: 'Technology'
  },
  {
    id: 8,
    src: '/work-environment/office-view.jpg',
    alt: 'Office view and atmosphere',
    caption: 'Inspiring work environment',
    category: 'Office Space'
  }
];

const categories = ['All', 'Office Space', 'Team Culture', 'Technology', 'Amenities'];

export default function WorkEnvironment() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof workEnvironmentImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? workEnvironmentImages 
    : workEnvironmentImages.filter(img => img.category === selectedCategory);

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

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300 hover:text-amber-600'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                {/* Placeholder for image - replace with actual image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🏢</div>
                    <div className="text-sm font-medium">{image.caption}</div>
                    <div className="text-xs text-gray-400 mt-1">Replace with actual image</div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-sm mb-1">{image.caption}</h3>
                    <p className="text-xs opacity-90">{image.category}</p>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
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
            { number: '100+', label: 'UK Hotels Managed', icon: '🏨' }
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder for modal image */}
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🏢</div>
                <div className="text-xl font-medium">{selectedImage.caption}</div>
                <div className="text-sm text-gray-400 mt-2">Replace with actual image</div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.caption}</h3>
              <p className="text-gray-600">{selectedImage.category}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
