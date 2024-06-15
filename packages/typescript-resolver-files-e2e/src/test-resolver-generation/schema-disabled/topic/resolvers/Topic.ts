import type { TopicResolvers } from './../../types.generated';
/*
 * Note: This object type is generated because "TopicMapper" is declared. This is to ensure runtime safety.
 *
 * When a mapper is used, it is possible to hit runtime errors in some scenarios:
 * - given a field name, the schema type's field type does not match mapper's field type
 * - or a schema type's field does not exist in the mapper's fields
 *
 * If you want to skip this file generation, remove the mapper or update the pattern in the `resolverGeneration.object` config.
 */
export const Topic: TopicResolvers = {
  /* Implement Topic resolver logic here */
  creator: async (_parent, _arg, _ctx) => {
    /* Topic.creator resolver is required because Topic.creator exists but TopicMapper.creator does not */
  },
};
