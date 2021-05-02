/// <reference types="angular" />
import { Payload } from '@smart/utils';
import { IDefaultExperienceParams, IExperience } from './IExperience';
/**
 * @ngdoc service
 * @name smarteditServicesModule.service:ExperienceService
 *
 * @description
 * ExperienceService deals with building experience objects given a context.
 */
export declare abstract class IExperienceService {
    updateExperiencePageContext(pageCatalogVersionUuid: string, pageId: string): Promise<IExperience>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:ExperienceService#getCurrentExperience
     * @methodOf smarteditServicesModule.service:ExperienceService
     *
     * @description
     * Retrieves the active experience.
     *
     * @returns {IExperience} an {@link smarteditServicesModule.interface:IExperience experience}
     */
    getCurrentExperience(): Promise<IExperience>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:ExperienceService#setCurrentExperience
     * @methodOf smarteditServicesModule.service:ExperienceService
     *
     * @description
     * Stores a given experience as current experience.
     * Invoking this method ensures that a hard refresh of the application will preserve the experience.
     *
     * @returns {Promise<IExperience>} a promise returning the experience
     */
    setCurrentExperience(experience: IExperience): Promise<IExperience>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:ExperienceService#hasCatalogVersionChanged
     * @methodOf smarteditServicesModule.service:ExperienceService
     *
     * @description
     * Determines whether the catalog version has changed between the previous and current experience
     *
     * @returns {Promise<boolean>} a promise returning whether thta catalog version has changed
     */
    hasCatalogVersionChanged(): Promise<boolean>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:ExperienceService#buildRefreshedPreviewUrl
     * @methodOf smarteditServicesModule.service:ExperienceService
     *
     * @description
     * Retrieves the active experience, creates a new preview ticket and returns a new preview url with an updated
     * previewTicketId query param
     *
     * @returns {Promise<string>} an url containing the new previewTicketId
     */
    buildRefreshedPreviewUrl(): Promise<string>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:ExperienceService#updateExperience
     * @methodOf smarteditServicesModule.service:ExperienceService
     *
     * @description
     * Retrieves the active experience, merges it with a new experience, creates a new preview ticket and reloads the
     * preview within the iframeManagerService
     *
     * @param {Payload=} newExperience The object containing new attributes to be merged with the current experience
     *
     * @returns {Promise<IExperience>} A promise of the updated experience
     */
    updateExperience(newExperience?: Payload): Promise<IExperience>;
    loadExperience(params: IDefaultExperienceParams): Promise<angular.ILocationService | void>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:ExperienceService#compareWithCurrentExperience
     * @methodOf smarteditServicesModule.service:ExperienceService
     *
     * @description
     * This method compares all the properties of given experience of type IDefaultExperienceParams with the current experience.
     *
     * @param {IDefaultExperienceParams} experience The object containing default experience params such as pageId, catalogId, catalogVersion and siteId
     *
     * @return {Promise<boolean>} A promise of true or false. True if current experience matches with the gien experience. Otherwise false.
     */
    compareWithCurrentExperience(experience: IDefaultExperienceParams): Promise<boolean>;
}
