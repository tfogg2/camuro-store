import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import GalleryItem from './GalleryItem.js'
import Pagination from "react-js-pagination"
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import Modal from './Modal'
import _ from 'lodash'




class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY,
      isOpen: false,
      activePage: 15,
      loaded: false
    }
  }

  // Pagination
  componentDidMount() {
    const { data: allPhotos = [] } = GALLERY;
    this.setState({ allPhotos });
    _.delay( () => {
      this.setState({
        loaded: true
      })
    }, 100 )
  }


  onPageChanged = data => {
    const { allPhotos } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPhotos = allPhotos.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentPhotos, totalPages });
  }

  // MODAL
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isHovered: false,
    });
    window.scrollTo(0, 0)
  }
  stopClose = (e) => {
    e.stopPropagation()
  }


  render(){
    const galleryClass = this.state.loaded ? 'gallery-items visible' : 'gallery-items'
    const { currentPhotos, currentPage, totalPages } = this.state
    const allPhotos = this.state
    const totalPhotos = allPhotos.length
    if (totalPhotos === 0) return null;


    const Gallery = ({state:{ gallery }}) => (
      <div>
        {gallery.slice(0, 15)
          .map(({image, title, credit}) => (
          <div className='gallery-item' onClick={this.toggleModal}>
            <GalleryItem key={title} title={title} image={image} credit={credit} />
          </div>
        ))}
      </div>
    )

    const UI = ({ state, state: { gallery },  }) => (
        <div className="gallery">
          <div className="gallery-header">
            <img src={require('../Assets/photos.svg')} alt="photos" />
            <p>Photos for the people. By the people.</p>
          </div>
          <div className={galleryClass}>
            <Gallery itemsCountPerPage={4} state={state} />
            {this.state.isOpen ?
              <div className="backdrop">
                <div className="modal-header">
                  <span className="close-modal" onClick={this.toggleModal}><img src={require('../Assets/back-arrow.svg')} alt="back-arrow"/></span>
                  <img className="photos-small" src={require('../Assets/photos-small.svg')} alt="photos" />
                </div>
                <div className="modal-items">
                  {gallery
                    .map(({image, title, credit}) => (
                      <Modal show={this.state.isOpen} onClose={this.toggleModal} stopClose={this.stopClose} image={image} title={title} credit={credit}></Modal>
                  ))}
                </div>
              </div>
            : null}
          </div>
        </div>
      )

    return <UI state={this.state}  />

  }
}

const GALLERY = [
  { image: require("../Assets/chad-dalke-mini.png"), title: "Chad Dalke", credit: "https://unsplash.com/@c3d"},
  { image: require("../Assets/filtergrade-nikon-mini.png"), title: "Filter Grade", credit: "https://unsplash.com/@filtergrade"},
  { image: require("../Assets/joseph-chan-mini.png"), title: "Joseph Chan", credit: "https://unsplash.com/@yulokchan"},
  { image: require("../Assets/jesus-santos-mini.png"), title: "Jesus Santos", credit: "https://unsplash.com/@eflash35"},
  { image: require("../Assets/stephen-cook-mini.png"), title: "Stephen Cook", credit: "https://unsplash.com/@3rdspace_photo"},
  { image: require("../Assets/sebastian-pichler-mini.png"), title: "Sebastian Pichler", credit: "https://unsplash.com/@pichler_sebastian"},
  { image: require("../Assets/chuttersnap.png"), title: "Chuttersnap", credit: "https://unsplash.com/@chuttersnap"},
  { image: require("../Assets/jeff-sheldon.png"), title: "Jeff Sheldon", credit: "https://unsplash.com/@ugmonk"},
  { image: require("../Assets/marc-mueller.png"), title: "Marc Mueller", credit: "https://unsplash.com/@seven11nash"},
  { image: require("../Assets/robert-shunev.png"), title: "Robert Shunev", credit: "https://unsplash.com/@rshunev"},
  { image: require("../Assets/sonnie-hiles.png"), title: "Sonnie Hiles", credit: "https://unsplash.com/@sonniehiles"},
  { image: require("../Assets/ehimetalor-unuabona.png"), title: "Ehimetalor Unuabona", credit: "https://unsplash.com/@theeastlondonphotographer"},
  { image: require("../Assets/baher-khairy.png"), title: "Baher Khairy", credit: "https://unsplash.com/@baher366"},
  { image: require("../Assets/chris-lawton.png"), title: "Chris Lawton", credit: "https://unsplash.com/@chrislawton"},
  { image: require("../Assets/jakob-owens.png"), title: "Jakob Owens", credit: "https://unsplash.com/@jakobowens1"},
]

export default Gallery;
