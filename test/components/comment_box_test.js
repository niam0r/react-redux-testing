import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// use describe to group together similar tests
describe('CommentBox', () => {

  it('has a text area', () => {
    const component = renderComponent(CommentBox);

    expect(component).to.contain('');
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);

    expect(component).to.contain('');
  });

});
