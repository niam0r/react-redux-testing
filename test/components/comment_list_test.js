import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['First Comment', 'Second Comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(comment.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(comment).to.contain('First Comment');
    expect(comment).to.contain('Second Comment');
  });
});
