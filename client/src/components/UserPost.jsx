import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"
import { useState } from "react"

const UserPost = ({ likes, replies, postTitle, postImg }) => {
	const [liked, setLiked] = useState(false)

	return (
		<Link to={"/markzuckerberg/post/1"}>
			<Flex gap={3} mb={4} py={5}>
				<Flex flexDirection={"column"} alignItems={"center"}>
					<Avatar size="md" name="Mark" src="/zuck-avatar.png" />
					<Box w="1px" h={"full"} bg={"gray.light"} my={2}></Box>
					<Box position={"relative"}>
						<Avatar
							size="xs"
							name="Messi"
							src="/profileMessi.jpeg"
							position={"absolute"}
							top={"15px"}
							left="-12px"
							padding={"2px"}
						/>
						<Avatar
							size="xs"
							name="Messi"
							src="/messiParis.jpg"
							position={"absolute"}
							bottom={"-15px"}
							right="-1px"
							padding={"2px"}
						/>
						<Avatar
							size="xs"
							name="Messi"
							src="/messiArgentina.jpg"
							position={"absolute"}
							bottom={"-17px"}
							left="1px"
							padding={"2px"}
						/>
					</Box>
				</Flex>
				<Flex flex={1} flexDirection={"column"} gap={2}>
					<Flex justifyContent={"space-between"} w={"full"}>
						<Flex w={"full"} alignItems={"center"}>
							<Text fontSize={"sm"} fontWeight={"bold"}>
								markzuckerberg
							</Text>
							<Image src="/verified.png" w={4} h={4} ml={1} />
						</Flex>
						<Flex gap={4} alignItems={"center"}>
							<Text fontStyle={"sm"} color={"gray.light"}>
								Id
							</Text>
							<BsThreeDots />
						</Flex>
					</Flex>

					<Text fontSize={"sm"}>{postTitle}</Text>
					{postImg && (
						<Box
							borderRadius={6}
							overflow={"hidden"}
							border={"1px solid"}
							borderColor={"gray.light"}
						>
							<Image src={postImg} w={"full"} />
						</Box>
					)}

					<Flex gap={3} my={1}>
						<Actions liked={liked} setLiked={setLiked} />
					</Flex>

					<Flex gap={2} alignItems={"center"}>
						<Text color={"gray.light"} fontSize={"sm"}>
							{replies} Replies
						</Text>
						<Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
						<Text color={"gray.light"} fontSize={"sm"}>
							{likes} Likes
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Link>
	)
}

export default UserPost
