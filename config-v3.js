

var config = {
    style: 'mapbox://styles/erikrenglish/clin0jzwi00nf01r0cn1a8hsn',
    accessToken: 'pk.eyJ1IjoiZXJpa3JlbmdsaXNoIiwiYSI6ImNqNXdnZDdnNTBlMDcyd3FzNHg5YjNsN3kifQ.kDgqHDJ00xCjvUXy8x57UA',
    showMarkers: false,
    markerColor: 'purple',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    projection: 'globe',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'sud-1',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: '<span class="dot-trade-ven"></span>Armed clashes, explosions, and attacks<br>Sexual violence, excessive force against protesters, and abductions<br>Violence against civilians, looting, mob violence<br>(ACLED)<br>',
            image: '',
          caption: '',
            description: 
'The Sudanese Armed Forces and Rapid Support Forces have been fighting since April 15th, leading to widespread displacement within Sudan and beyond.',
          location: {
                center: [29.76770, 15.50109],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'acled', 
                     opacity: 0.8,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'acled',
                     opacity: 0,
                 }
            ]
        },
      {
            id: 'sud-2',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Internally displaced persons<br><50,000<br>50,000-200,000<br>>200,000',
            image: '',
          caption: '',
            description: 
'Since the war began, more than 3.5 million Sudanese have been displaced and more than 800,000 have fled the country, with reports of targeted ethnic killings in Greater Darfur and Khartoum. ',
          location: {
                center: [29.76770, 15.50109],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'displaced', 
                     opacity: 0.6,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'displaced',
                     opacity: 0,
                 }
            ]
        },{
            id: 'sud-3',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Food insecurity<br>Sressed<br>Crisis<br>Famine',
            image: '',
          caption: '',
            description: 
'Already one of the most climate vulnerable nations in the world, the conflict has exacerbated pre-existing inflationary issues, disrupted access to basic services, and pushed much of the country into a state of food crisis, with more than six million people facing the prospect of famine.',
          location: {
                center: [29.76770, 15.50109],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'fews-may', 
                     opacity: 0.8,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'fews-may',
                     opacity: 0,
                 }
            ]
        },
      {
            id: 'sud-4',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: '',
            image: '',
          caption: '',
            description: 
'',
          location: {
                center: [29.76770, 15.50109],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'fews-may', 
                     opacity: 0,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'fews-may',
                     opacity: 0,
                 }
            ]
        },
    ]
};
