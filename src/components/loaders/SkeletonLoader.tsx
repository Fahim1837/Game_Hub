import {
    Card,
    CardBody,
    SimpleGrid,
    Skeleton,
    SkeletonText,
} from '@chakra-ui/react'

function SkeletonLoader() {
    const num: number[] = [1, 2, 3, 4, 5, 8]
    return (
        <SimpleGrid
            columns={3}
            spacing={10}>
            {num.map((item) => (
                <Card
                    key={item}
                    borderRadius={8}
                    w="100%">
                    <Skeleton h={200} />
                    <CardBody>
                        <SkeletonText
                            mt="4"
                            noOfLines={3}
                            spacing="4"
                            skeletonHeight="4"
                        />
                    </CardBody>
                </Card>
            ))}
        </SimpleGrid>
    )
}

export default SkeletonLoader
