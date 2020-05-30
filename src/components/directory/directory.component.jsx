import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
             sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://www.outdoorcap.com/media/wysiwyg/homepage/Retail_Home_Page_Link.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://cdn.improb.com/wp-content/uploads/2018/02/Best-field-jackets-for-any-weather.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'shoes',
                  imageUrl: 'https://cdn.shopify.com/s/files/1/0070/1922/products/workshop_demo_era_00.jpg',
                  id: 3,
                  linkUrl: 'shop/shoes'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.pinimg.com/originals/11/4e/65/114e658be7ac58cc148633aad60f6b63.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://cdn.shopify.com/s/files/1/0245/1138/1585/files/3.Main_604x518_41e07fce-aaf4-4ada-89bd-176872a22ddd_600x.jpg?height:400px;',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        };
    }
    
    render() {
        return (
          <div className='directory-menu'>
            {this.state.sections.map(({ title, imageUrl, id, size }) => (
              <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
          </div>
        );
      }
}

export default Directory;