using Microsoft.AspNetCore.Mvc;
using NineLivesCatRescueLibrary;
using NineLivesCatRescueLibrary.ApiClients;
using NineLivesCatRescueLibrary.Models;

namespace NineLivesCatRescue.Controllers
{
    [Route("api/rescue-groups")]
    [ApiController]
    public class RescueGroupsController : ControllerBase
    {
        private RescueGroupsApiClient _rescueGroupsApiClient;
        private SubmitApplicationApiClient _submitApplicationApiClient;
        
        public RescueGroupsController(RescueGroupsApiClient rescueGroupsApiClient, SubmitApplicationApiClient submitApplicationApiClient)
        {
            _rescueGroupsApiClient = rescueGroupsApiClient;
            _submitApplicationApiClient = submitApplicationApiClient;
        }

        [Route("available")]
        [HttpGet]
        public async Task<RootModel> GetAvailableCatsByParameter()
        {
            var availableCats = await _rescueGroupsApiClient.GetAvailableAnimalsAsync().ConfigureAwait(false);
            return availableCats;
        }

        [Route("organization")]
        [HttpGet]
        public async Task<RootModel> GetOrganizationInfo()
        {
            var organization = await _rescueGroupsApiClient.GetOrganizationInfoAsync().ConfigureAwait(false);
            return organization;
        }

        [Route("adoption-application")]
        [HttpPost]
        public async Task<bool> SubmitAdoptionApplication([FromBody] AdoptionFormModel adoptionForm)
        {
            bool success = await _submitApplicationApiClient.SubmitAdoptionApplication(adoptionForm)
                .ConfigureAwait(false);
            return success;
        }

        [Route("foster-application")]
        [HttpPost]
        public async Task<bool> SubmitFosterApplication([FromBody] FosterFormModel fosterForm)
        {
            bool success = await _submitApplicationApiClient.SubmitFosterApplication(fosterForm)
                .ConfigureAwait(false);
            return success;
        }

        [Route("contact-form")]
        [HttpPost]
        public async Task<bool> SubmitContactForm([FromBody] ContactFormModel contactForm)
        {
            bool success = await _submitApplicationApiClient.SubmitContactForm(contactForm)
                .ConfigureAwait(false);
            return success;
        }
    }
}
