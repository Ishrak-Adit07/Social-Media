import { Fragment } from 'react';

export const postModalID = "exampleModal";
export const postModalFragment = (
    <Fragment>
      <div class="modal fade" id={postModalID} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">

          <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">What's on your mind?</h5>
          </div>

          <div class="modal-body">

                <div className="postBar">
                    <input type="text" className="postBarInput" placeholder='Write Post'/>
                </div>

                <div className="postImageBar">
                    <input type="file" className="postImageBarInput" placeholder='Write Post'/>
                </div>

          </div>

          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
          <button type="button" class="btn btn-primary">Post</button>
          </div>

          </div>
        </div>
      </div>
      </Fragment>
  )