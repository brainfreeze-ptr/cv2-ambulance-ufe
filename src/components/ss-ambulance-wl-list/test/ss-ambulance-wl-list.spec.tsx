import { newSpecPage } from '@stencil/core/testing';
import { SsAmbulanceWlList } from '../ss-ambulance-wl-list';

describe('ss-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SsAmbulanceWlList],
      html: `<ss-ambulance-wl-list></ss-ambulance-wl-list>`,
    });
    
    const wlList = page.rootInstance as SsAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});
